from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional 
from uuid import uuid4, UUID
app = FastAPI()

class Task(BaseModel):
    id: Optional[UUID] = None
    title: str
    description: Optional[str] = None
    completed: bool = False

tasks = []
@app.post("/tasks/", response_model=Task)
def create_task(task: Task):
    task.id = uuid4()
    tasks.append(task)
    return task
@app.get("/tasks/", response_model= List[Task])
def read_tasks():
    return tasks
@app.put("/tasks/{task_id}", response_model = Task)
def update_task(task_id: UUID, updated_task: Task,):
    for idx, task in enumerate(tasks):
        if task.id == task_id:
            task_update = task.copy(update=updated_task.dict(exclude_unset=True))
            tasks[idx] = task_update
            return task_update
@app.delete("/tasks/{task_id}", response_model=List[Task])
def delete_task(task_id : UUID):
    for task in tasks:
        if task.id == task_id:
            tasks.remove(task)
            return tasks


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host ="0.0.0.0", port =8000)