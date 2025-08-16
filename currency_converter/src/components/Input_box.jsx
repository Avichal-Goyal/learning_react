import React, {useId} from 'react'

const Input_box = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) => {
    const id = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='flex-1'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                id={id}
                type="number"
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled={amountDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className='flex flex-col items-start flex-shrink-0 min-w-[120px]'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>

            </div>
        </div>
    )
}

export default Input_box