import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Dialog,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Textarea,
} from "design-system";
import { useDisclosure } from "@chakra-ui/react";

const AB_STORAGE_KEY = "user-test-feedback-variant";

type Variant = "A" | "B";

function getStoredOrRandomVariant(): Variant {
  try {
    const stored = sessionStorage.getItem(AB_STORAGE_KEY) as Variant | null;
    if (stored === "A" || stored === "B") return stored;
  } catch {
    // ignore
  }
  const variant: Variant = Math.random() < 0.5 ? "A" : "B";
  try {
    sessionStorage.setItem(AB_STORAGE_KEY, variant);
  } catch {
    // ignore
  }
  return variant;
}

export function UserTest() {
  const [variant, setVariant] = useState<Variant | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Flow A: inline
  const [inlineFeedback, setInlineFeedback] = useState("");
  const [inlineSent, setInlineSent] = useState(false);

  // Flow B: modal
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalCategory, setModalCategory] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalSent, setModalSent] = useState(false);

  useEffect(() => {
    setVariant(getStoredOrRandomVariant());
  }, []);

  const handleInlineSend = () => {
    if (!inlineFeedback.trim()) return;
    setInlineSent(true);
    setInlineFeedback("");
  };

  const handleModalSend = () => {
    onClose();
    setModalSent(true);
    setModalName("");
    setModalEmail("");
    setModalCategory("");
    setModalMessage("");
  };

  const openModal = () => {
    setModalSent(false);
    onOpen();
  };

  if (variant === null) {
    return (
      <Box minH="100vh" bg="figma.muted" py={8} px={4}>
        <Container maxW="900px">
          <Text color="figma.fg_muted">Loading...</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="figma.muted" py={8} px={4}>
      <Container maxW="900px">
        <VStack align="stretch" gap={8}>
          <Box>
            <Heading size="xl" mb={2} color="figma.fg">
              User test
            </Heading>
            <Text color="figma.fg_muted" fontSize="md" lineHeight="tall">
              This is the User test sub page. You can add content and flows here.
            </Text>
          </Box>

          {/* A/B test section */}
          <Box
            p={6}
            borderRadius="lg"
            borderWidth="1px"
            borderColor="figma.borderDefault"
            bg="figma.default"
          >
            <Heading size="md" mb={2} color="figma.fg">
              A/B test: feedback flow
            </Heading>
            <Text color="figma.fg_muted" fontSize="sm" mb={4}>
              You are seeing flow {variant}. {variant === "A" ? "Send feedback using the simple field below." : "Use the Send feedback button to open a form in a modal."}
            </Text>

            {/* Flow A: simple inline text field + send */}
            {variant === "A" && (
              <VStack align="stretch" gap={4}>
                {inlineSent && (
                  <Alert status="success" borderRadius="md" role="status" aria-live="polite">
                    <AlertIcon />
                    <AlertTitle>Feedback sent</AlertTitle>
                    <AlertDescription>Thank you for your feedback.</AlertDescription>
                  </Alert>
                )}
                <Textarea
                  label="Your feedback"
                  placeholder="Tell us what you think..."
                  value={inlineFeedback}
                  onChange={(e) => setInlineFeedback(e.target.value)}
                  minH="100px"
                />
                <Button
                  colorScheme="teal"
                  label="Send feedback"
                  onClick={handleInlineSend}
                  isDisabled={!inlineFeedback.trim()}
                />
              </VStack>
            )}

            {/* Flow B: button opens modal with multiple fields */}
            {variant === "B" && (
              <>
                {modalSent && (
                  <Alert status="success" borderRadius="md" role="status" aria-live="polite" mb={4}>
                    <AlertIcon />
                    <AlertTitle>Feedback sent</AlertTitle>
                    <AlertDescription>Thank you for your feedback.</AlertDescription>
                  </Alert>
                )}
                <Button colorScheme="teal" label="Send feedback" onClick={openModal} />
                <Dialog
                  title="Send feedback"
                  isOpen={isOpen}
                  onClose={onClose}
                  footer={
                    <HStack spacing={3} justify="flex-end">
                      <Button colorScheme="teal" variant="outline" label="Cancel" onClick={onClose} />
                      <Button
                        colorScheme="teal"
                        label="Send"
                        onClick={handleModalSend}
                        isDisabled={!modalMessage.trim()}
                      />
                    </HStack>
                  }
                >
                  <VStack align="stretch" spacing={4}>
                    <Input
                      label="Name"
                      placeholder="Your name"
                      value={modalName}
                      onChange={(e) => setModalName(e.target.value)}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                    />
                    <Input
                      label="Category"
                      placeholder="e.g. Bug, Suggestion, Other"
                      value={modalCategory}
                      onChange={(e) => setModalCategory(e.target.value)}
                    />
                    <Textarea
                      label="Message"
                      placeholder="Your feedback..."
                      value={modalMessage}
                      onChange={(e) => setModalMessage(e.target.value)}
                      minH="100px"
                    />
                  </VStack>
                </Dialog>
              </>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
