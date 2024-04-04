const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

  //filter , sort , map

  const filtered = arr.filter( arr => arr.part !== "staff")
  console.log(filtered);

  const sorted = filtered.sort((a,b)=>b.age-a.age);
  console.log(sorted);

  const mapped = sorted.map(function(temp){
    return {...temp, part:temp.part.toUpperCase()}
  })
  
  console.log(mapped);