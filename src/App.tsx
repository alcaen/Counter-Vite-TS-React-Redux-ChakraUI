import "./styles.css";
// React use state imports
import { useState } from "react";
// Import redux funcs
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./redux/counter";

// Chakra
import {
  ArrowRightIcon,
  AddIcon,
  MinusIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { IconButton, Heading, Text, Box } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Image,
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
      {/* This input use normal state and passes his value to 
            increment by amount  */}
      <Box
        mt={8}
        display="flex"
        alignItems="center"
        flexDir="column"
        rowGap={8}
      >
        <Heading>The count is {count}</Heading>

        <Text fontSize="xl" textAlign="center" mx={5}>
          Click the buttons to increment or decrement count
        </Text>

        <Box flex={1} display="flex" w="100%" maxW={360} mx={4}>
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

        <Box display="flex" maxW={400} flex={2}>
          {/* <input
          type="range"
          min="0"
          max="20"
          step="1"
          value={value}
          onChange={(e) => handleChange(e)}
        /> */}
          <IconButton
            colorScheme="red"
            aria-label="Decrement Many"
            icon={<ArrowLeftIcon />}
            onClick={() => dispatch(decrementByAmount(value))}
          />
          <Box
            justifyContent="center"
            alignItems="center"
            display="flex"
            w={20}
          >
            <Text fontSize="xl">{value}</Text>
          </Box>

          {/* Here we use the global reducer to send the amount catched 
            by the the input range */}
          <IconButton
            colorScheme="green"
            aria-label="Add Many"
            icon={<ArrowRightIcon />}
            onClick={() => dispatch(incrementByAmount(value))}
          />
        </Box>
        <Box display="flex">
          <Tooltip hasArrow label="GitHub" bg="gray.900">
            <Box
              as="a"
              href="https://github.com/alcaen/Counter-Vite-TS-React-Redux-ChakraUI"
              target="_blank"
              mx={5}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Alcaen GitHub"
                w={10}
                h={10}
              />
            </Box>
          </Tooltip>

          <Tooltip hasArrow label="LinkedIn" bg="blue.500">
            <Box
              as="a"
              href="https://www.linkedin.com/in/alcaen/"
              target="_blank"
              mx={5}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="Alcaen LinkedIn"
                w={10}
                h={10}
              />
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
}
// BTW made by Alcaen :p
