import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_INIT_NUMBER, CREATE_INIT_NUMBER } from "../graphql/gql";

const useInitNumber = () => {
  const [initNumber, setInitNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [createInitNumber] = useMutation(CREATE_INIT_NUMBER);
  const { data } = useQuery(GET_INIT_NUMBER);

  async function onStart(n) {
    if (!n) {
      try {
        const { data } = createInitNumber();
        setInitNumber(data.createInitNumber);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
      setInitNumber(n);
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(data);
    if (data) onStart(data.initNumber);
  }, [data]);

  return [initNumber, loading];
};

export default useInitNumber;
