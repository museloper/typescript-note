function t_sum(a: number, b: number) {
  return a + b
}

t_sum(10, 20)
// t_sum('10', '20') // ERR

var t_total = t_sum(10, 20)
t_total.toLocaleString()
