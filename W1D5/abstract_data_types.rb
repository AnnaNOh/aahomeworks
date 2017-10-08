# W1D5 HW - Abstract Data Types
# Anna Oh

# Exercise 1 - Stacks
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
     @ivar.dup
   end
 end


# testing
example = Stack.new
example.add(3)
example.add(5)
example.add(7)
example.show
example.remove
example.show
example.remove
example.show


# Exercise 2 - Queue
class Queue
  attr_accessor :ivar

  def initialize
    @ivar = []
  end

  def enqueue(el)
    @ivar.push(el)
  end

  def dequeue
    @ivar.shift
  end

  def show
    @ivar.dup
  end
end

# testing
example = Queue.new
example.enqueue(3)
example.enqueue(5)
example.enqueue(7)
example.show
example.dequeue
example.show
example.dequeue
example.show


# Exercise 3 - Map
class Map
  def initialize
    @ivar = []
  end

  def index_of(key)
    @ivar.each_with_index do |el,i|
      return i if key == el[0]
    end
    nil
  end

  def lookup(key)
    return @ivar[index_of(key)][1] if index_of(key) != nil
    nil
  end

  def assign(key, value)
    if index_of(key) == nil
      @ivar << [key, value]
    else
      @ivar[index_of(key)] = [key, value]
    end
  end

  def remove(key)
    @ivar.delete_at( index_of(key) ) if lookup(key) != nil
  end

  def show
    deep_dup(@ivar)
  end

  def deep_dup(arr)
    arr.map do |el|
      if el.is_a?(Array)
        deep_dup(el)
      else
        el
      end
    end
  end


end




# testing
example = Map.new
p example.assign("cat", "kitty")
p example.assign("dog", "puppy")
p example.show
p example.lookup("cat")
p example.lookup("dog")
p example.assign("cat", "tomcat")
p example.lookup("cat")
p example.show
p example.remove("dog")
p example.lookup("dog")
