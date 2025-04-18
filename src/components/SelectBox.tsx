type PropTypes = {
  defaultValue?: string
  onChange: (value: string) => void
  options: { value: string, label: string }[]
}

export default function SelectBox({ 
  defaultValue = 'default',
  options = [],
  onChange,
}: PropTypes) {
  return (
    <div className="inline-block relative">
      <select 
        role="combobox"
        defaultValue={defaultValue}
        onChange={e => onChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  )
}
