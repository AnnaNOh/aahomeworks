# W1D5 HW - Abstract Data Types
# Anna Oh

class Stack
  attr_accessor :ivar


   def initialize
     # create ivar to store stack here!
     @ivar = []
   end

   def add(el)
     # adds an element to the stack
     ivar.push(el)
   end

   def remove
     # removes one element from the stack
     ivar.pop
   end

   def show
     p @ivar
   end
 end


# testing
example = Stack.new
example.add(3)
example.add(5)
example.show
example.remove
example.show
example.remove
example.show
