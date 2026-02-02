import { useState } from "react";
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
  Combobox,
} from "design-system";
import { useDisclosure, FormLabel, Textarea } from "@chakra-ui/react";

const serviceTypeOptions = [
  { value: "maintenance", label: "Maintenance" },
  { value: "installation", label: "Installation" },
  { value: "inspection", label: "Inspection" },
  { value: "repair", label: "Repair" },
  { value: "other", label: "Other" },
];

export function ServiceRequestPrototype() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState<1 | 2>(1);
  const [saved, setSaved] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [requestedDate, setRequestedDate] = useState("");

  const handleClose = () => {
    onClose();
    setStep(1);
    setFullName("");
    setEmail("");
    setServiceType("");
    setDescription("");
    setRequestedDate("");
  };

  const handleSave = () => {
    handleClose();
    setSaved(true);
  };

  return (
    <Box minH="100vh" bg="figma.muted" py={8} px={4}>
      <Container maxW="900px">
        <VStack align="stretch" gap={8}>
          <Box>
            <Heading size="xl" mb={2} color="figma.fg">
              Service request (prototype)
            </Heading>
            <Text color="figma.fg_muted" fontSize="md" lineHeight="tall">
              Create a service request: open the modal from the primary button, complete two steps, then save. A success message appears after saving.
            </Text>
          </Box>

          {saved && (
            <Alert status="success" borderRadius="md" role="status" aria-live="polite">
              <AlertIcon />
              <AlertTitle>Request saved</AlertTitle>
              <AlertDescription>Your service request has been saved.</AlertDescription>
            </Alert>
          )}

          <Box>
            <Button
              colorScheme="teal"
              label="Create service request"
              onClick={() => {
                setSaved(false);
                onOpen();
              }}
            />
          </Box>

          <Dialog
            title={step === 1 ? "User details" : "Service details"}
            isOpen={isOpen}
            onClose={handleClose}
            footer={
              <HStack spacing={3} justify="flex-end">
                {step === 2 && (
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    label="Back"
                    onClick={() => setStep(1)}
                  />
                )}
                {step === 1 ? (
                  <Button colorScheme="teal" label="Next" onClick={() => setStep(2)} />
                ) : (
                  <Button colorScheme="teal" label="Save request" onClick={handleSave} />
                )}
              </HStack>
            }
          >
            {step === 1 && (
              <VStack align="stretch" spacing={4}>
                <Input
                  label="Full name"
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </VStack>
            )}
            {step === 2 && (
              <VStack align="stretch" spacing={4}>
                <Box>
                  <FormLabel fontWeight="500" color="gray.700" mb={1} display="block">
                    Service type
                  </FormLabel>
                  <Combobox
                    options={serviceTypeOptions}
                    value={serviceType}
                    onChange={(v) => setServiceType(v)}
                    placeholder="Select service type"
                  />
                </Box>
                <Box>
                  <FormLabel fontWeight="500" color="gray.700" mb={1} display="block">
                    Description
                  </FormLabel>
                  <Textarea
                    placeholder="Describe your request"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    size="md"
                    borderRadius="md"
                    borderColor="figma.borderDefault"
                    _hover={{ borderColor: "gray.300" }}
                    _focus={{
                      borderColor: "teal.500",
                      boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
                    }}
                    fontFamily="body"
                    minH="80px"
                  />
                </Box>
                <Input
                  label="Requested date"
                  type="date"
                  value={requestedDate}
                  onChange={(e) => setRequestedDate(e.target.value)}
                />
              </VStack>
            )}
          </Dialog>
        </VStack>
      </Container>
    </Box>
  );
}
