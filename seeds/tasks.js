exports.seed = function (knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return Promise.all([
        knex('tasks').insert({id: 001, Project_Name: 'Proj_1', Task: "task", Colour:"blue", Priority:2,Details:'text',Compleated:true}),
        knex('tasks').insert({id: 002, Project_Name: 'Proj_2', Task: "task", Colour:"red", Priority: 2,Details:'text',Compleated:false}),
        knex('tasks').insert({id: 003, Project_Name: 'Proj_3', Task: "task", Colour:"green", Priority: 3,Details:'text',Compleated:true})
      ])
    })
}
