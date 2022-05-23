## Caesar Cypher

It was said that Julius Caesar protected his private documents by encrypting them using a cipher. The cypher works by taking each letter of the input text and shifting it by a number of letters. If the shift takes the letter past the end of the alphabet then it moves back to the beginning of the alphabet. In the case of a shift by 2, w, x , y and z would map to y, z, a, b. Case ought to be preserved, and any non-(A-Z/a-z) characters are left unmodified.
The challenge this week is to encrypt the entirety of Jane Austin's "Pride and Prejudice" as fast as possible (without using any compile-time pre-computation).
Rewards:
:five: Points are awarded for encoding the book in under 500ms*
:two: Further points are awarded for encoding the book in under 100ms*
:two: Further points are awarded for encoding the book in under 50ms\*
The remaining :one: point is awarded to the fastest submission.

- Performance will be tested on my MacBook Pro (2019)
