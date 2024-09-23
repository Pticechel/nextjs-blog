import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <Button style={{borderRadius:50, maxWidth:32, maxHeight:32, fontSize:7}} variant={"korzina"}>Корзина</Button>
  );
}
