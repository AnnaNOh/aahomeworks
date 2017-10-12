fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

#sluggish octopus O(n^2)
def nested_loop_search(fish)
  longest_fish = true
  fish.each_with_index do |fish1, i1|
    fish.each_with_index do |fish2, i2|
      longest_fish = false if fish2.length > fish1.length
    end
    return fish1 if longest_fish
  end
end


# dominant octopus O(nlogn)
class Array
  def merge_sort(&prc)
    if prc == nil
      prc = Proc.new { |x,y| x <=> y }
    end

    return self if length <= 1

    mid = length/2
    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    result = []

    left_i = 0
    right_i = 0
    until left.empty? || right.empty?
      if prc.call(left[left_i], right[right_i]) == 1
        result << right[right_i]
        right_i += 1
      else
        result << left[left_i]
        left_i += 1
      end
    end

    result + left[left_i..-1] + right[right_i..-1]
  end

def dominant_octopus(fish)
  prc = Proc.new{ |x,y| x.length <=> y.length }
  sorted_fish = fish.merge_sort(&prc)
  sorted_fish[0]
end

# clever octopus O(n)
def clever_octopus(fish)
  biggest_fish = fish[0]
  fish.each do |el|
    biggest_fish = el if biggest_fish.length < el.length
  end
  biggest_fish
end



# dancing octopus
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
# slow dance O(n)
def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end

# constant dance O(1)
tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}

def constant_dance(direction, tiles_hash)
  tiles_hash[direction]
end
