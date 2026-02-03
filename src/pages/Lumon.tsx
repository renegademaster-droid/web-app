import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Link,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  Badge,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "design-system";

/** Simple icon placeholders using Box (design-system only, no icon lib). */
const GridIcon = () => (
  <Box aria-hidden w="4" h="4" display="grid" gridTemplateColumns="1fr 1fr" gap="1px">
    <Box bg="currentColor" borderRadius="sm" />
    <Box bg="currentColor" borderRadius="sm" />
    <Box bg="currentColor" borderRadius="sm" />
    <Box bg="currentColor" borderRadius="sm" />
  </Box>
);
const SearchIcon = () => (
  <Box aria-hidden w="4" h="4" position="relative">
    <Box as="span" position="absolute" top="0" left="0" w="3" h="3" borderWidth="1.5px" borderColor="currentColor" borderRadius="full" />
    <Box as="span" position="absolute" bottom="0" right="0" w="2" h="0.5" bg="currentColor" transform="rotate(45deg)" transformOrigin="bottom right" />
  </Box>
);
const ListIcon = () => (
  <Box aria-hidden w="4" h="4" display="flex" flexDirection="column" justifyContent="space-evenly">
    <Box as="span" display="block" h="0.5" bg="currentColor" />
    <Box as="span" display="block" h="0.5" bg="currentColor" />
    <Box as="span" display="block" h="0.5" bg="currentColor" />
  </Box>
);
const SettingsIcon = () => (
  <Box aria-hidden w="4" h="4" position="relative" sx={{ "&::before": { content: '""', position: "absolute", inset: 0, border: "1.5px solid", borderColor: "currentColor", borderRadius: "full" } }}>
    <Box as="span" position="absolute" top="0" left="1/2" w="0.5" h="1" bg="currentColor" transform="translateX(-50%)" />
    <Box as="span" position="absolute" bottom="0" left="1/2" w="0.5" h="1" bg="currentColor" transform="translateX(-50%)" />
    <Box as="span" position="absolute" left="0" top="1/2" w="1" h="0.5" bg="currentColor" transform="translateY(-50%)" />
    <Box as="span" position="absolute" right="0" top="1/2" w="1" h="0.5" bg="currentColor" transform="translateY(-50%)" />
  </Box>
);
const PlusIcon = () => (
  <Box aria-hidden w="4" h="4" display="flex" alignItems="center" justifyContent="center">
    <Box as="span" position="absolute" w="2" h="0.5" bg="currentColor" />
    <Box as="span" position="absolute" w="0.5" h="2" bg="currentColor" />
  </Box>
);
const BriefcaseIcon = () => (
  <Box aria-hidden w="5" h="4" borderWidth="1.5px" borderColor="currentColor" borderRadius="sm" position="relative">
    <Box as="span" position="absolute" top="-1px" left="1/2" w="3" h="0.5" borderWidth="1.5px" borderColor="currentColor" borderBottomWidth="0" borderRadius="sm" transform="translateX(-50%)" />
  </Box>
);
const PersonIcon = () => (
  <Box aria-hidden w="4" h="4" position="relative">
    <Box as="span" position="absolute" top="0" left="1/2" w="2" h="2" borderWidth="1.5px" borderColor="currentColor" borderRadius="full" transform="translateX(-50%)" />
    <Box as="span" position="absolute" bottom="0" left="0" right="0" h="1.5" bg="currentColor" borderRadius="sm" />
  </Box>
);
const ClockIcon = () => (
  <Box aria-hidden w="5" h="5" borderWidth="1.5px" borderColor="currentColor" borderRadius="full" position="relative">
    <Box as="span" position="absolute" top="1/2" left="1/2" w="0.5" h="1.5" bg="currentColor" transform="translate(-50%, -100%)" />
    <Box as="span" position="absolute" top="1/2" left="1/2" w="1" h="0.5" bg="currentColor" transform="translate(-50%, -50%)" />
  </Box>
);
const MessageIcon = () => (
  <Box aria-hidden w="5" h="4" borderWidth="1.5px" borderColor="currentColor" borderRadius="sm" position="relative">
    <Box as="span" position="absolute" bottom="1" left="1" right="1" h="0.5" bg="currentColor" borderRadius="full" />
  </Box>
);
const MoreIcon = () => (
  <Box aria-hidden w="4" h="4" display="flex" justifyContent="center" alignItems="center" gap="1px">
    <Box as="span" w="1" h="1" bg="currentColor" borderRadius="full" />
    <Box as="span" w="1" h="1" bg="currentColor" borderRadius="full" />
    <Box as="span" w="1" h="1" bg="currentColor" borderRadius="full" />
  </Box>
);
const BellIcon = () => (
  <Box aria-hidden w="4" h="4" position="relative">
    <Box as="span" display="block" w="3" h="2.5" borderWidth="1.5px" borderColor="currentColor" borderRadius="sm" borderBottomWidth="0" />
    <Box as="span" position="absolute" bottom="0" left="50%" w="1" h="1.5" bg="currentColor" transform="translateX(-50%)" borderRadius="full" />
  </Box>
);

const navTabs = [
  "Dashboard",
  "Basics",
  "Content",
  "Price",
  "Files",
  "Notes",
  "Messages",
  "Events & Activities",
  "Supplies",
];

const pipelineSteps = [
  { label: "Lead", status: "Processed", date: "21.8.2025", active: false },
  { label: "Sales opportunity", status: "Open", date: "21.8.2025", active: true },
  { label: "Quote", status: "No status", date: null, active: false },
  { label: "Order", status: "No status", date: null, active: false },
  { label: "Follow-up", status: "No status", date: null, active: false },
];

function DetailField({ label, value, link }: { label: string; value: string; link?: boolean }) {
  return (
    <VStack align="stretch" gap={0} py={2} spacing={0}>
      <Text as="span" fontSize="xs" fontWeight="500" color="figma.fg_muted" textTransform="uppercase" letterSpacing="wider">
        {label}
      </Text>
      {link ? (
        <Link href="#" color="teal.600" _hover={{ textDecoration: "underline" }} fontSize="sm" isTruncated>
          {value}
        </Link>
      ) : (
        <Text color="figma.fg" fontSize="sm" isTruncated>
          {value}
        </Text>
      )}
    </VStack>
  );
}

export function Lumon() {
  return (
    <Flex minH="100vh" bg="figma.bg" color="figma.fg" direction={{ base: "column", md: "row" }}>
      {/* Left sidebar */}
      <Box
        as="nav"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        w="14"
        flexShrink={0}
        borderRightWidth="1px"
        borderColor="figma.borderDefault"
        bg="figma.default"
        py={4}
        alignItems="center"
        gap={6}
      >
        <Link href="#" aria-label="Home" color="figma.fg" _hover={{ color: "figma.fg_muted" }}>
          <GridIcon />
        </Link>
        <Link href="#" aria-label="Search" color="teal.600" _hover={{ color: "teal.700" }}>
          <SearchIcon />
        </Link>
        <Link href="#" aria-label="List" color="figma.fg" _hover={{ color: "figma.fg_muted" }}>
          <ListIcon />
        </Link>
        <Link href="#" aria-label="Settings" color="figma.fg" _hover={{ color: "figma.fg_muted" }}>
          <SettingsIcon />
        </Link>
        <Link href="#" aria-label="Add" color="figma.fg" _hover={{ color: "figma.fg_muted" }}>
          <PlusIcon />
        </Link>
      </Box>

      <Flex direction="column" flex={1} minW={0}>
        {/* Top header */}
        <Box
          as="header"
          borderBottomWidth="1px"
          borderColor="figma.borderDefault"
          bg="figma.default"
          py={3}
          px={4}
        >
          <Container maxW="full" px={0}>
            <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
              <HStack gap={4}>
                <Link href="#" fontWeight="bold" fontSize="lg" _hover={{ opacity: 0.85 }} textDecoration="none">
                  LUMON
                </Link>
                <Text fontSize="sm" color="figma.fg_muted">
                  50805980 / 768560
                </Text>
              </HStack>
              <HStack gap={2} flex={1} justify="center" display={{ base: "none", lg: "flex" }}>
                <Tabs variant="unstyled" index={0}>
                  <TabList gap={0} borderBottomWidth="0">
                    {navTabs.map((tab) => (
                      <Tab
                        key={tab}
                        py={2}
                        px={3}
                        fontSize="sm"
                        color="figma.fg_muted"
                        _selected={{ color: "orange.500", borderBottom: "2px solid", borderColor: "orange.500" }}
                      >
                        {tab}
                        {tab === "Events & Activities" && (
                          <Badge ml={2} colorScheme="red" variant="solid" fontSize="xs">
                            1
                          </Badge>
                        )}
                      </Tab>
                    ))}
                  </TabList>
                </Tabs>
              </HStack>
              <HStack gap={3}>
                <Button aria-label="Search" variant="ghost" size="sm" px={2}>
                  <SearchIcon />
                </Button>
                <Box position="relative">
                  <Button aria-label="Notifications" variant="ghost" size="sm" px={2}>
                    <BellIcon />
                  </Button>
                  <Badge position="absolute" top="-1" right="-1" colorScheme="red" variant="solid" fontSize="xs">
                    0
                  </Badge>
                </Box>
                <Avatar size="sm" name="FL" bg="teal.500" />
              </HStack>
            </Flex>
          </Container>
        </Box>

        {/* Progress / pipeline */}
        <Box py={4} px={4} borderBottomWidth="1px" borderColor="figma.borderDefault" bg="figma.default">
          <Container maxW="full" px={0}>
            <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
              <HStack gap={0} flexWrap="wrap" divider={<Box px={2} color="figma.fg_muted">|</Box>}>
                {pipelineSteps.map((step) => (
                  <Box
                    key={step.label}
                    py={1}
                    px={2}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={step.active ? "teal.500" : "transparent"}
                    bg={step.active ? "teal.50" : "transparent"}
                  >
                    <Text fontSize="sm" fontWeight={step.active ? "600" : "400"} color="figma.fg">
                      {step.label}
                    </Text>
                    <Text fontSize="xs" color="figma.fg_muted">
                      {step.status}
                      {step.date ? ` · ${step.date}` : ""}
                    </Text>
                  </Box>
                ))}
              </HStack>
              <Button label="Create quote →" colorScheme="teal" size="sm" />
            </Flex>
          </Container>
        </Box>

        {/* Main content */}
        <Box flex={1} py={6} px={4} bg="figma.bg">
          <Container maxW="full" px={0}>
            <Heading size="sm" color="figma.fg_muted" mb={4} textTransform="uppercase" letterSpacing="wider">
              Dashboard
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} gap={6}>
              {/* Basic details */}
              <Card p={3} cardVariant="outline">
                <Flex justify="space-between" align="center" mb={4}>
                  <HStack gap={2}>
                    <Box color="figma.fg_muted">
                      <BriefcaseIcon />
                    </Box>
                    <Heading size="sm">Basic details</Heading>
                  </HStack>
                  <Menu>
                    <MenuButton as={Button} variant="ghost" size="sm" px={2} aria-label="More options">
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Duplicate</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <HStack align="stretch" gap={4} flexWrap="wrap" direction={{ base: "column", sm: "row" }}>
                  <VStack align="stretch" gap={0} flex={1} minW="120px">
                    <DetailField label="Lead name" value="Superfast Builders Oy" />
                    <DetailField label="Project name" value="Project Sunrise" />
                    <DetailField label="Customer segment" value="Aftersales" />
                    <DetailField label="Property type" value="Row house" />
                    <DetailField label="Customer need" value="Not clear" />
                  </VStack>
                  <VStack align="stretch" gap={0} flex={1} minW="120px">
                    <DetailField label="Lead source" value="Events: shows" />
                    <DetailField label="Lead reference" value="PRO BIM-Object Downloads" />
                    <DetailField label="Sales person" value="Lotta Luukkanen" />
                    <DetailField label="Phone" value="+358 40 123 45678" />
                    <DetailField label="Profit center" value="Lumon Vantaa" />
                  </VStack>
                </HStack>
              </Card>

              {/* Customer details */}
              <Card p={3} cardVariant="outline">
                <Flex justify="space-between" align="center" mb={4}>
                  <HStack gap={2}>
                    <Box color="figma.fg_muted">
                      <PersonIcon />
                    </Box>
                    <Heading size="sm">Customer details</Heading>
                  </HStack>
                  <Menu>
                    <MenuButton as={Button} variant="ghost" size="sm" px={2} aria-label="More options">
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Duplicate</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <HStack align="stretch" gap={4} flexWrap="wrap" direction={{ base: "column", sm: "row" }}>
                  <VStack align="stretch" gap={0} flex={1} minW="120px">
                    <DetailField label="Company name" value="Superfast Builders Oy" />
                    <DetailField label="Street address" value="Fifth Avenue 305-306" />
                    <DetailField label="Zip code" value="12345" />
                    <DetailField label="City" value="New York City" />
                    <DetailField label="Country" value="USA" />
                  </VStack>
                  <VStack align="stretch" gap={0} flex={1} minW="120px">
                    <DetailField label="Last name" value="Demonstrate" />
                    <DetailField label="First name" value="Jeff" />
                    <DetailField label="Phone" value="+358 40 123 45678" />
                    <DetailField label="Cell phone" value="+358 40 123 45678" />
                    <DetailField label="Email" value="firstname.lastname-lastname@customerdomain.com" link />
                  </VStack>
                </HStack>
              </Card>

              {/* Events & Activities */}
              <Card p={3} cardVariant="outline">
                <Flex justify="space-between" align="center" mb={4}>
                  <HStack gap={2}>
                    <Box color="figma.fg_muted">
                      <ClockIcon />
                    </Box>
                    <Heading size="sm">Events & Activities</Heading>
                  </HStack>
                  <Menu>
                    <MenuButton as={Button} variant="ghost" size="sm" px={2} aria-label="More options">
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <VStack py={8} gap={3}>
                  <Box color="figma.fg_muted" opacity={0.6}>
                    <ClockIcon />
                  </Box>
                  <Text color="figma.fg_muted" fontSize="sm">
                    No events and activities
                  </Text>
                  <Button label="Create new" colorScheme="teal" size="sm" leftIcon={<PlusIcon />} />
                </VStack>
              </Card>

              {/* Messages */}
              <Card p={3} cardVariant="outline">
                <Flex justify="space-between" align="center" mb={4}>
                  <HStack gap={2}>
                    <Box color="figma.fg_muted">
                      <MessageIcon />
                    </Box>
                    <Heading size="sm">Messages</Heading>
                  </HStack>
                  <Menu>
                    <MenuButton as={Button} variant="ghost" size="sm" px={2} aria-label="More options">
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <VStack py={8} gap={3}>
                  <Box color="figma.fg_muted" opacity={0.6}>
                    <MessageIcon />
                  </Box>
                  <Text color="figma.fg_muted" fontSize="sm">
                    No messages
                  </Text>
                  <Button label="Create new" colorScheme="teal" size="sm" leftIcon={<PlusIcon />} />
                </VStack>
              </Card>
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </Flex>
  );
}
