import "./styles.css";
// React use state imports
import { useState } from "react";
// Import redux funcs
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { decrement, increment, incrementByAmount } from "./redux/counter";

// Chakra
import { ArrowRightIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton, Heading, Text, Box } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

// App
export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // To make the input range i use states cause we dont want that specific
  // state global
  const [value, setValue] = useState(0);
  const handleChange = (e: Number) => {
    setValue(Number(e));
  };

  return (
    <div className="App">
      <Heading>The count is {count}</Heading>
      <Text fontSize="xl">
        Click the buttons to increment or decrement count
      </Text>
      <div>
        {/* This input use normal state and passes his value to 
            increment by amount  */}
        <Box px={200} mt={8} mb={5} display="flex">
          <IconButton
            colorScheme="red"
            aria-label="Decrement"
            icon={<MinusIcon />}
            onClick={() => dispatch(decrement())}
          />

          <Slider
            aria-label="slider-ex-2"
            colorScheme="tomato"
            defaultValue={value}
            min={0}
            max={20}
            size="lg"
            onChange={(e) => handleChange(e)}
          >
            <SliderTrack>
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={5} bg="tomato" />
          </Slider>

          <IconButton
            colorScheme="green"
            aria-label="Increment"
            icon={<AddIcon />}
            onClick={() => dispatch(increment())}
          />
        </Box>

        {/* <input
          type="range"
          min="0"
          max="20"
          step="1"
          value={value}
          onChange={(e) => handleChange(e)}
        /> */}
        <Text fontSize="xl">{value}</Text>
        {/* Here we use the global reducer to send the amount catched 
            by the the input range */}
        <IconButton
          colorScheme="green"
          aria-label="Add Many"
          icon={<ArrowRightIcon />}
          onClick={() => dispatch(incrementByAmount(value))}
        />
      </div>
    </div>
  );
}
// BTW made by Alcaen :p
