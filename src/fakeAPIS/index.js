import { createServer, Model } from "miragejs"

export const setUpServer = () => {
    let server = createServer({
        models: {
            todos: Model
        },
        routes() {
            this.get('/api/todos',(schema) => {
                return schema.todos.all();
            })
            this.post('/api/addtodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                return schema.todos.create(payload);
            })
            this.post('/api/updateTodo', (schema, request) => {

                console.log(schema)
                const payload = JSON.parse(request.requestBody);
                console.log(payload)
                const currentToDo = schema.todos.findBy({name: payload.name});
                console.log(currentToDo)
                currentToDo.update({completed: payload.completed});
                return currentToDo;
            })
        }
    });
    
}