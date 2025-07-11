import React, { useState } from "react";
import NavBar from "../../components/custom/NavBar";
import Hero from "../../components/custom/Hero";
import HowItWorks from "../../components/custom/HowItWorks";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Checkbox } from "@radix-ui/react-checkbox";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "cmdk";
import { Command } from "../../components/ui/command";
import { Badge } from "../../components/ui/badge";
import { X } from "lucide-react";
import CardFeed from "../../components/custom/Feed/CardFeed";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

type Category = {
  label: string;
  value: string;
};

const CATEGORIES: Category[] = [
  { label: "Saúde", value: "health" },
  { label: "Financeiro", value: "finance" },
  { label: "Produtividade", value: "productivity" },
  { label: "Educação", value: "education" },
  { label: "Bem-estar", value: "wellness" },
];

const feedCards = [
  {
    id: 1,
    title: "E-Commerce Platform",
    creator: "Jane Doe",
    role: "Front-End Developer",
    stack: "ReactJS",
    status: "Open",
    applications: 3,
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    creator: "John Smith",
    role: "UI/UX Designer",
    stack: "Figma",
    status: "Open",
    applications: 5,
  },
  {
    id: 3,
    title: "Travel Booking App",
    creator: "Seeeh A.",
    role: "Flutter Developer",
    stack: "Flutter",
    status: "Open",
    applications: 12,
  },
  {
    id: 4,
    title: "Personal Blog Site",
    creator: "Alox R.",
    role: "VueJS Devleoper",
    stack: "VueJS",
    status: "Open",
    applications: 7,
  },
];

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState([...feedCards]);

  const toggleValue = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const removeValue = (value: string) =>
    setSelected((prev) => prev.filter((v) => v !== value));

  const searchProject = (value: string) => {
    if (value === "") setFilteredProjects(feedCards);

    const filteredProjects = feedCards.filter((project) =>
      project.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProjects(filteredProjects);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] p-10">
      <NavBar />
      <Hero />
      <HowItWorks />
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          searchProject(search)}}
        className="flex items-start container mx-auto gap-8 mt-20"
      >
        <Input
          type="text"
          placeholder="Procurar projeto..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          className="w-1/3 p-6"
        />
        <div className="w-1/3">
          <Select>
            <SelectTrigger className="w-full text-white p-6">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="portfolio">Portfólio</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
              <SelectItem value="algo ai">Algo ai</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/3">
          {/* Campo que abre o popover */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="w-full rounded-md border bg-background text-left text-sm p-4">
              {selected.length
                ? `Selecionadas: ${selected.length}`
                : "Selecione categorias"}
            </PopoverTrigger>

            {/* Popover com a lista */}
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Filtrar…" />
                <CommandList>
                  <CommandEmpty>Nada encontrado.</CommandEmpty>

                  <CommandGroup>
                    {CATEGORIES.map((cat) => (
                      <CommandItem
                        key={cat.value}
                        onSelect={() => toggleValue(cat.value)}
                        className="cursor-pointer"
                      >
                        <Checkbox
                          checked={selected.includes(cat.value)}
                          className="mr-2"
                          aria-label={cat.label}
                        />
                        {cat.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Chips com as categorias escolhidas */}
          {selected.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.map((value) => {
                const cat = CATEGORIES.find((c) => c.value === value)!;
                return (
                  <Badge key={value} className="pl-2 pr-1 py-1 text-xs">
                    {cat.label}
                    <button
                      onClick={() => removeValue(value)}
                      className="ml-1 rounded-full p-0.5 hover:bg-muted"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
        <Button type="submit" className="text-md p-7">
          Procurar
        </Button>
      </form>

      <div className="container mx-auto mt-20">
        <h1 className="text-4xl text-white font-semibold pb-10">Feed</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          {filteredProjects.map((card) => (
            <CardFeed key={card.id}
              id={card.id}
              title={card.title}
              creator={card.creator}
              role={card.role}
              stack={card.stack}
              status={card.status}
              applications={card.applications}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <Card className="w-full p-4 bg-[#14171C] text-white">
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl text-white font-semibold ">
                  Porque ajudar a construir projetos?
                </h1>
                <span className="font-light mt-2">
                  "É uma ótima maneira de ganhar experiência e melhorar seu
                  portfólio!"
                </span>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-5xl text-[#6aa17f] font-semibold">
                  12,584
                </h1>
                <span className="font-light mt-2">Projetos construídos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
