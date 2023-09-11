import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

import { NewspaperIcon } from "@heroicons/react/24/solid";

export default function Dashboard({ auth }: PageProps) {
    console.log(auth);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="flex h-screen">
                <div className="flex flex-col items-center gap-3 bg-black p-2 min-w-[200px] text-white">
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Conteúdos</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Turmas</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Certificados</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Banners</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Assinaturas</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Convites</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Membros</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Comunidade</h4>
                    </div>
                    <div className="flex justify-start items-center gap-3 p-2 rounded-md w-full">
                        <NewspaperIcon className="h-6 w-6" />
                        <h4>Rankin</h4>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center p-5 bg-gray-200">
                        <div>
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Gestão de produtos digitais
                            </h2>
                            <p className="text-gray-400">
                                Adicione novos conteúdos ou mude a visualização
                                da sua vitrine.
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div className="font-semibold p-4 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-300">
                                <h4>+ Nova categoria</h4>
                            </div>
                            <div className="font-semibold p-4 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-300">
                                <h4>+ Novo curso</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
