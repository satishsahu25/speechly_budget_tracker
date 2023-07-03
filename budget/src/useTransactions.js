import { useContext } from "react";
import { ExpenseTrackerContext } from "./Components/context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/category";

const useTransactions = (title) => {
  //title for income and expense categories
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionperType = transactions.filter((t) => t.type === title); //only income or expense
  const totals = transactionperType.reduce(
    (acc, currval) => acc += currval.amount,0); //for handling the amount and total
  const categories = title === "Income" ? incomeCategories : expenseCategories;

//   console.log({ transactionperType, totals, categories });
  transactionperType.forEach((t) => {
    //first we find catgeory then we loop through categories and where ever
    //  match found we increase that amount
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });
  // we will remove the category with zero amount
  const filteredcategories = categories.filter((sc) => sc.amount > 0);

  //CHART DATA
  const chartdata = {
    datasets: [
      {
        data: filteredcategories.map((c) => c.amount),
        backgroundColor: filteredcategories.map((c) => c.color),
      }],
    labels: filteredcategories.map((c) => c.type),
  };

  return {  filteredcategories,totals,chartdata };
};

export default useTransactions;
