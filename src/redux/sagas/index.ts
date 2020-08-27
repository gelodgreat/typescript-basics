import { fork, all } from 'redux-saga/effects';
import test from "./test"

const sagas = [
    test
]

export default function* root() {
    yield all(sagas.map(fork))
}