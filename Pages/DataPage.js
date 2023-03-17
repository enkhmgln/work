import { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";

const DataCard = ({ entityName, deviceType, data, status, wifiSignal }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
    <Text fontWeight="bold">{entityName}</Text>
    <Text mt="2">Device type: {deviceType}</Text>
    <Text>Data: {data}</Text>
    <Text>Status: {status}</Text>
    <Text>WiFi Signal: {wifiSignal}</Text>
  </Box>
);

const DataRenderer = ({ dataArray }) => (
  <Flex flexWrap="wrap">
    {dataArray.map((data) => (
      <Box key={data.entityName} m="4">
        <DataCard {...data} />
      </Box>
    ))}
  </Flex>
);

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.178:4550/", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <DataRenderer dataArray={data} />;
};

export default DataFetcher;
