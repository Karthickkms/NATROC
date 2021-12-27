const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
 
  console.log(scores.map((score) => score.name));
  console.log(scores.map((score) => score.marks));

  const result = scores.filter((t1)=> t1.marks>40);
  console.log(result);

  const failed = scores.filter((t2) => t2.marks < 40);
  console.log(failed); 
 const failedNames = failed.map((t2)=> t2.name);
  console.log(failedNames);

  const failedNames2 = scores
        .filter((score)=> score.marks<40)
        .map((score)=> score.name);
   console.log(failedNames2);   
   
   
   const topperNames = scores
   .filter((t3)=> t3.marks>75)
   .map((t3)=> t3.name);
 console.log(topperNames); 

 const total = scores
     .reduce((sum,marks)=>sum+marks,0)
  console.log(total);

 const average = scores.reduce((add,marks)=>add/total,0)
                       
 console.log(average);
   
    

   

