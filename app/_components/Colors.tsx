interface types {
  code1: string,
  code2: string,
  code3: string
}
const Colors = ({ code1, code2, code3 }:types) => {
  console.log(`bg-[${code1}]`,`bg-[${code2}]`,`bg-[${code3}]`)
  return (
    <div className="
      grid
      [grid-template-areas:'col1_col2_col3''code1_code2_code3']
      grid-cols-[120px_120px_120px]
      grid-rows-[120px_30px]
      place-content-center
      mt-5
      mb-5">
        <div style={{gridArea:"col1", backgroundColor: code1}}></div>
        <div style={{gridArea:"col2", backgroundColor: code2}}></div>
        <div style={{gridArea:"col3", backgroundColor: code3}}></div>
        <span className="grid [grid-area: code1] place-content-center drop-shadow text-slate-600">{code1}</span>
        <span className="grid [grid-area: code2] place-content-center drop-shadow text-slate-600">{code2}</span>
        <span className="grid [grid-area: code3] place-content-center drop-shadow text-slate-600">{code3}</span>
    </div>
  )
}

export default Colors