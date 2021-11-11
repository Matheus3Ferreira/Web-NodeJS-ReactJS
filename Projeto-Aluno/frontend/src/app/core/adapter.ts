export interface Adapter<T, R, Y> {
    adapt(item: any): T
    post(item: any): R
    put(item: any): Y
}