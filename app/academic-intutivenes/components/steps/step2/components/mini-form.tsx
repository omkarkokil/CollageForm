"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = { title: string };
const publishingMonthEnum = z.enum([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
const indexedInEnum = z.enum(["SCI", "SCOUPUS", "UGC_CARE", "PEER_REVIEWED"]);
export const step1formSchema = z.object({
  bookTitle: z.string(),
  titleWithPageNo: z.string(),
  publisherName: z.string(),
  editorName: z.string(),
  issnOrIssbnNo: z.string(),
  detailOfCoAuthors: z.string(),
  publishingYear: z.string().min(4).max(4),
  publishingMonth: publishingMonthEnum,
});
const addProfile = async (data: z.infer<typeof step1formSchema>) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const result: AxiosResponse = await axios.put(
    `${process.env.NEXT_PUBLIC_ROUTE}/api/form/books`,
    data,
    config
  );
  return result.data;
};
const MiniForm = ({ title }: Props) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addProfile,
    onSuccess: async (data) => {
      toast.success(data?.message);
      await queryClient.invalidateQueries({
        queryKey: [`form-details-books`],
      });
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof step1formSchema>>({
    resolver: zodResolver(step1formSchema),
    defaultValues: {
      bookTitle: undefined,
      titleWithPageNo: undefined,
      publisherName: undefined,
      editorName: undefined,
      issnOrIssbnNo: undefined,
      detailOfCoAuthors: undefined,
      publishingMonth: undefined,
      publishingYear: undefined,
    },
  });
  console.log(form.getValues());

  const onSubmit = async (values: z.infer<typeof step1formSchema>) => {
    console.log(`🚀 ~ file: mini-form.tsx:79 ~ values:`, values);
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-1 flex flex-col"
      >
        <div className="text-primary text-sm font-bold underline">{title}</div>
        <FormField
          control={form.control}
          name="bookTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Title</FormLabel>
              <Input placeholder="Enter Your Book Title" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="publishingMonth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Publishing Month" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="January">January</SelectItem>
                  <SelectItem value="February">February</SelectItem>
                  <SelectItem value="March">March</SelectItem>
                  <SelectItem value="April">April</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="June">June</SelectItem>
                  <SelectItem value="July">July</SelectItem>
                  <SelectItem value="August">August</SelectItem>
                  <SelectItem value="September">September</SelectItem>
                  <SelectItem value="October">October</SelectItem>
                  <SelectItem value="November">November</SelectItem>
                  <SelectItem value="December">December</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="titleWithPageNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title with page no</FormLabel>
              <Input placeholder="Enter Your Book Title" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publisherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publisher Name</FormLabel>
              <Input placeholder="Enter Your Publisher Name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="editorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Editor Name</FormLabel>
              <Input placeholder="Enter Your Editor Name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issnOrIssbnNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISSN / ISSBN</FormLabel>
              <Input placeholder="Enter Your ISSN / ISSBN No" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="detailOfCoAuthors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Name of Co-Authors</FormLabel>
              <Input placeholder="Enter Your Name of Co-Author" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publishingYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publishing Year</FormLabel>
              <Input placeholder="Enter Your Publishing Year" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex mx-auto rounded-full p-4 h-auto"
          variant={"outline"}
        >
          <Plus className=" text-xl text-primary" />
        </Button>
      </form>
    </Form>
  );
};

export default MiniForm;