// import firebase = require('firebase/app')
import * as firebase from 'firebase/app'
import 'firebase/database' 
// require('firebase/database')
import { environment } from './environments/environment'

firebase.initializeApp(environment.firebase)

export function addUrl() {
    return firebase.database().ref('urls')
}
export function getRoom(roomId) {
    return firebase.database().ref("rooms/" + roomId)
}
export function deletePerson(roomId, person) {
    firebase.database().ref("rooms/" + roomId + "/" + person).remove()
}
export function deleteTile(roomId, person, key) {
    firebase.database().ref("rooms/" + roomId + "/" + person + "/" + key).remove()
}
export function toggleModVisibility(roomId, person, key, hidden) {
    firebase.database().ref("rooms/" + roomId + "/" + person + "/" + key + "/hidden").set(!hidden)
}
export function checkRoom(roomId) {
    return firebase.database().ref("passwords/" + roomId)
}
export function addCustomEvent(roomId, person, tileDetails) {
    let tile = {
        day: tileDetails.day,
        start: tileDetails.start,
        end: tileDetails.end,
        module_code: tileDetails.name,
        type: "",
        venue: "",
        custom: true,
        hidden: false,
        week: ""
    }
    firebase.database().ref("rooms/" + roomId + "/" + person).push(tile)
}
export function createRoom(roomId, roomPassword) {
    firebase.database().ref("passwords/" + roomId).set({ password: roomPassword })
}

export function getRoomCount() {
    return firebase.database().ref("passwords")
}

export function findTile(room, person, key) {
    return firebase.database().ref("rooms/" + room + "/" + person + "/" + key)
}
