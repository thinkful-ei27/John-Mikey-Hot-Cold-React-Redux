// Restart game
// Make a guess

// Restart game will reset the current state to initial state
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME
})

// Make guess will ...
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (number) => ({
    type: MAKE_GUESS,
    number
})