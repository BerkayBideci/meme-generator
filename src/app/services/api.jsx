import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useMemes = () => {
    return useQuery({
        queryKey: ["memes"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://api.imgflip.com/get_memes"
            );
            return data;
        },
    });
};
