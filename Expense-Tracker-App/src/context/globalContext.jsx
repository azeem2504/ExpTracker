import React, { createContext, useState, useContext } from "react";
import axios from 'axios'

const BASE_URL = "https://exptracker-backend-8fvg.onrender.com/api/v1/";

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response?.data?.message)
            })
        getIncomes()
    }
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)

    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    }

    //expenses
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response?.data?.message)
            })
        getExpenses()
    }
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)

    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpense = () => {
        let totalExpense = 0
        expenses.forEach((income) => {
            totalExpense = totalExpense + income.amount
        })
        return (totalExpense);
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    console.log('total', totalIncome());

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError

        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
