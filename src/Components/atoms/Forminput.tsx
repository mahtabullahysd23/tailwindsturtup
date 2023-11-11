import React from 'react'

type Props = {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Forminput = (props: Props) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        {props.label}
      </label>
      <input
        className="shadow appearance-none rounded-xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline "
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Forminput