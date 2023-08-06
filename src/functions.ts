
import type { Column, Project, Task } from '@prisma/client';
import type { IColumn, IProject, ITask } from '$lib/types';
import { v4 as uuidv4 } from 'uuid';


// export function showTaskDialog(task: ITask | undefined, column: IColumn) {
//     DIALOG_TASK.set(task);
//     CURRENT_COLUMN.set(column);
//     DIALOG_MANAGER.update(state => ({ ...state, taskDialog: true }));
// }
// export function showProjectDialog() {
//     DIALOG_MANAGER.update(state => ({ ...state, projectDialog: true }));
// }

// export function showColumnDialog(column: IColumn) {
//     CURRENT_COLUMN.set(column);
//     DIALOG_MANAGER.update(state => ({ ...state, columnDialog: true }));
// }
// export function showNewProjectDialog() {
//     DIALOG_MANAGER.update(state => ({ ...state, newProjectDialog: true }));
// }


// export function moveTask(task: ITask, origin: IColumn, destination: IColumn) {
//     destination.tasks = [...(destination.tasks || []), task];
//     // $CURRENT_PROJECT = $CURRENT_PROJECT;
//     CURRENT_PROJECT.update((p) => (p = p));
// }

export function addTask(column: IColumn, task: ITask) {
    if (!task.title && !task.details) return;

    // Generate a new id for the task and add it to the column's tasks array
    task.id = uuidv4();

    column.tasks = [...(column.tasks || []), task];



    // updateProject(column);
}

// export function updateTask(column: IColumn, task: ITask) {
//     if (!task.title && !task.details) return;

//     // Find the task in the column's tasks array and replace it with the new task
//     let index = column.tasks!.findIndex((t) => t.id === task.id);
//     if (index !== -1) {
//         column.tasks![index] = task;
//     }

//     updateProject(column);
// }


// export function removeTask(column: IColumn, task: ITask) {
//     column.tasks = column.tasks?.filter((t) => t.id !== task.id);
//     updateProject(column);
// }

// export function removeColumn(columnID: string) {
//     CURRENT_PROJECT.update((p: IProject) => {
//         p.columns = p.columns.filter((col) => col.id != columnID)
//         return p;
//     })
// }

// export function updateProject(column: IColumn) {
//     CURRENT_PROJECT.update((p: IProject) => {
//         // Find the column in the project
//         const columnToUpdate = p.columns.find((c) => c.id === column.id);
//         if (columnToUpdate) {
//             // Update the tasks of the column
//             columnToUpdate.tasks = column.tasks;
//         }
//         return p;
//     });
// }