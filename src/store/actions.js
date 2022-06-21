import * as actionTypes from "./actionTypes"

export function taskCompleted(id){
    return {
        type:actionTypes.taskUpdated, 
        payload:{id, completed:true}
    }
}

export function titleChanged(id){
    return {
        type:actionTypes.taskUpdated, 
        payload:{id, title:`new title for ${id}`}
    }
}

export function deleteTask(id){
    return {
        type:actionTypes.taskDeleted, 
        payload:{id}
    }
}
