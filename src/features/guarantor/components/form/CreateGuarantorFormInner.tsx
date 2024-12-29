import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {
    createGuarantorFormSchema,
    type CreateGuarantorFormSchema,
} from '../../types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~/components/ui/input';
import { inputHandle } from '~/utils/form-input';
import { SelectCustomer } from '~/features/customer/components/select/SelectCustomer';

type CreateGuarantorFormInnerProps = {
    form_id: string;
    onSubmit: (values: CreateGuarantorFormSchema) => void;
};

export const CreateGuarantorFormInner = ({
    form_id,
    onSubmit,
}: CreateGuarantorFormInnerProps) => {
    const form = useForm<CreateGuarantorFormSchema>({
        defaultValues: {
            name: '',
            national_id: '',
            id_card_address: '',
            residential_address: '',
            occupation: '',
            phone: '',
            relationship: '',
            customer_id: '',
        },
        resolver: zodResolver(createGuarantorFormSchema),
    });

    return (
        <Form {...form}>
            <form
                id={form_id}
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
            >
                <div>
                    <SelectCustomer form={form} name="customer_id" />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan nama disini"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="national_id"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>
                                    Nomor Induk Kewarganegaraan
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan NIK disini"
                                        onChange={e => {
                                            inputHandle.onChange.number(e);
                                            onChange(e);
                                        }}
                                        onPaste={inputHandle.onPaste.number}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="id_card_address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alamat berdasarkan KTP</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan alamat disini"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="residential_address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alamat tempat tinggal</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan alamat disini"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pekerjaan</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan pekerjaan disini"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Nomor HP</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan nomor hp disini"
                                        onChange={e => {
                                            inputHandle.onChange.number(e);
                                            onChange(e);
                                        }}
                                        onPaste={inputHandle.onPaste.number}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="relationship"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hubungan Keluarga</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan hubungan keluarga disini"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};