const VlogList = () => {
  return (  
    <>
      <h1>Vlog List</h1>
      {/* create component for vlog card */}
      {/*  */}
    </>
  )
} 
export default VlogList

/* Solve Meal Cost

Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer. */

function solve(meal_cost, tip_percent, tax_percent) {
  let total = 0
  total += (tip_percent/100 * meal_cost)
  total += (tax_percent/100 * meal_cost)
  total += meal_cost
  console.log(Math.round(total))
  return Math.round(total)
}

solve(12.00, 20, 8)