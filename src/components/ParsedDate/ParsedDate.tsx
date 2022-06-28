interface Props {
  date:Date
}
function ParsedDate({date}:Props){
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  console.log(date.getUTCDay())
  return <>{`${date.getUTCDay()+1} de ${months[date.getUTCMonth()]} de ${date.getUTCFullYear()}`}</>
}

export default ParsedDate