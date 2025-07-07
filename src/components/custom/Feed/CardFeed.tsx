import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { useNavigate } from "react-router-dom";

interface CardFeedProps {
  id: number
  title: string;
  creator: string;
  role: string;
  stack: string;
  status: string;
  applications: number;
}

const CardFeed = ({
  id,
  title,
  creator,
  role,
  stack,
  status,
  applications,
}: CardFeedProps) => {
  const navigate = useNavigate()

  return (
    <Card 
      onClick={() => navigate(`/project/${id}`)}
    className="cursor-pointer bg-[#14171C] text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{creator}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span>{role}</span>
        <Badge className="px-4 py-2">{stack}</Badge>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <label>{applications} applications</label>
        <Badge className="px-4 py-2" variant='secondary'>
          <label>{status}</label>
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CardFeed;
