//recebe tipagem original e uma de replace
export type Replace<T, R> = Omit<T, keyof R> & R;
