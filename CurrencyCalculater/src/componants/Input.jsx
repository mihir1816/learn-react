import React, { useId } from 'react'

function Input(

    label , 
    amount , 
    onCurrencyChange , 
    OnAmountChange , 
    currencyOptions = [] , 
    selectCurrency = "usd" , 
    amountDisable 

) {
    const uniueId = useId()
  return (
    <>
   
   <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={uniueId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={uniueId}
                    value={amount}
                    onChange={(e)=> {
                        OnAmountChange && OnAmountChange(Number(e.target.value) )
                    }}
                    disabled = {amountDisable}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"     
                    value={selectCurrency}
                    onChange={(e)=>{
                        onCurrencyChange && onCurrencyChange( e.target.value)
                    }}
                    disabled = {amountDisable}
                >     
                        {currencyOptions.map( (currency) => (
                                <option key={currency} value={currency}>
                                     {currency}
                                 </option>
                                 )
                             )
                        }
                     
                </select>
            </div>
        </div>

    
    
    </>
  )
}

export default Input