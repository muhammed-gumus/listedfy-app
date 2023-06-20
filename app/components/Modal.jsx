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
} from "@chakra-ui/react";

import { useEffect, useState, useRef, useContext } from "react";
import { ItemsContext } from "../context/items";

export function FormModal({ song }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  const [item, setItem] = useState("");
  const { addItem } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      name: song.album.name,
      username: item,
    });
    setItem("");
  };

  return (
    <>
      <Button
        onClick={onOpen}
        borderColor="white"
        color="white"
        colorScheme="teal"
        variant="outline"
        borderTop="0px"
        borderTopRadius="0"
        width="35%"
        _hover={{ bg: "black", borderColor: "white", color: "white" }}
      >
        Button
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
            <FormControl onSubmit={handleSubmit}>
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
              />
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
