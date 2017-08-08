exports.seed = function (knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return Promise.all([
        knex('tasks').insert({id: 001, Project_Name: 'Strzelec', Task: "Art", Colour:"deepskyblue", Priority:5, Details:'3D Models!',Compleated:true}),
        knex('tasks').insert({id: 002, Project_Name: 'Animacja', Task: "Rigging building", Colour:"salmon", Priority: 4,Details:'For animationn DP!',Compleated:false}),
        knex('tasks').insert({id: 003, Project_Name: 'Rola-gra', Task: "Gameplay issues.", Colour:"orangered", Priority: 3,Details:'Request Gate Mechanic!',Compleated:true}),
        knex('tasks').insert({id: 004, Project_Name: 'Wilk', Task: "Fur Grooming", Colour:"lime", Priority:5 ,Details:'For Lighting!',Compleated:true}),
        knex('tasks').insert({id: 005, Project_Name: 'Krykiet', Task: "Textures!", Colour:"Red", Priority: 11,Details:'For the cricket balls!',Compleated:true})
      ])
    })
}
