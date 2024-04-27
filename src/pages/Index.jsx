// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Input, Text, VStack, Image } from "@chakra-ui/react";
import { FaYoutube, FaFileUpload, FaMagic } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center">
            AI Video Reworder
          </Heading>
          <Text mt={2} fontSize="md" textAlign="center">
            Transform your videos with new styles and content using AI.
          </Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MTQxNzcxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Upload Video
          </Heading>
          <Input placeholder="Paste YouTube URL or upload a file" size="md" />
          <Button leftIcon={<FaYoutube />} colorScheme="red" mt={2} w="full">
            Fetch YouTube Video
          </Button>
          <Button leftIcon={<FaFileUpload />} colorScheme="teal" mt={2} w="full">
            Upload Video File
          </Button>
        </Box>

        <Box>
          <Button rightIcon={<FaMagic />} colorScheme="purple" size="lg" py={6} w="full">
            Re-create Video
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
