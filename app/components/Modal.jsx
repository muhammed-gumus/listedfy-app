"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Icon,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { InfoOutlineIcon, SmallAddIcon } from "@chakra-ui/icons";

import { useState, useRef, useContext } from "react";
import { ItemsContext } from "../context/items";

export function FormModal({ song }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  const [item, setItem] = useState("");
  const { addItem, items } = useContext(ItemsContext);
  const isError = item === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item !== "") {
      onClose();
      addItem({
        url: song.external_urls.spotify,
        songName: song.album.name,
        username: item,
        artistName: song.album.artists[0].name,
        imageUrl: song.album.images[0].url,
        followers: song.popularity.toString(),
        date: song.album.release_date,
        id: song.id,
      });
    }
    setItem("");
  };

  return (
    <>
      <Button
        border="0px"
        color="white"
        borderTopRightRadius="sm"
        borderTopLeftRadius="0"
        colorScheme="teal"
        variant="outline"
        borderTop="0px"
        onClick={onOpen}
        _hover={{
          color: "yellow.400",
        }}
      >
        Add
        <SmallAddIcon />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        size="xl"
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center" color="black">
            {song.album.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={isError} isRequired onSubmit={handleSubmit}>
              <FormLabel color="black" opacity="0.7" fontSize="sm">
                Username
              </FormLabel>
              <Input
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                ref={initialRef}
                color="black"
                placeholder="e.g. 01Cabbar01"
              />{" "}
              {isError && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter gap=".5rem">
            <Button
              color="green"
              _hover={{ bgColor: "green", color: "white" }}
              size="md"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              onClick={onClose}
              color="red"
              _hover={{ bgColor: "red", color: "white" }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
