const list=document.getElementById('transaction-list');
const descriptionEl=document.getElementById('description');
const amountEl=document.getElementById('amount');
const transactionForm=document.getElementById('transaction-form');
const balanceEl=document.getElementById('balance');
const incomeEl=document.getElementById('income-amount');
const expenseEl=document.getElementById('expense-amount');

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
updateTransactionList();
updateSummary();

 transactionForm.addEventListener("submit",addTransaction);
function addTransaction(event){
  event.preventDefault();

  const description=descriptionEl.value.trim();
  const amount=parseFloat(amountEl.value);

  transactions.push({
    id:Date.now(),
    description,
    amount
  });
  localStorage.setItem("transactions",JSON.stringify(transactions));
  updateTransactionList();
  updateSummary();
  transactionForm.reset();

}

function updateTransactionList(){
    list.innerHTML="";
    const sortedTransactions=[...transactions].reverse();
    sortedTransactions.forEach((transaction)=>{
        const transactionEle=createTransaction(transaction);
        console.log(transactionEle);
        list.appendChild(transactionEle);
    })

}
function createTransaction(transaction){
    const li=document.createElement("li");
    li.classList.add("transaction");
    console.log(transaction.amount);
    console.log(typeof(transaction.amount));
    li.classList.add(transaction.amount>0?"income":"expense");

    li.innerHTML=`
    <span>${(transaction.description)}</span>
    <span>${formatCurrency(transaction.amount)}
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>    
    </span>`
    return li;
    
}

function updateSummary(){
    let balance=0;
    let income=0;
    let expense=0;
    transactions.forEach((ele)=>{
        balance+=ele.amount;
        if(ele.amount>0){
            income+=ele.amount;

        }
        else{
            expense +=ele.amount;
        }
    });
    incomeEl.textContent=formatCurrency(income);
    expenseEl.textContent=formatCurrency(expense);
    balanceEl.textContent=formatCurrency(balance);
    

}

function formatCurrency(number){
    return new Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
    }).format(number);
}

function removeTransaction(id){
    transactions=transactions.filter(ele=>{
       return ele.id!=id;
    })
    console.log(transactions);
    localStorage.setItem("transactions",JSON.stringify(transactions))
    updateSummary();
    updateTransactionList();
}