'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteInvoice } from '@/app/lib/actions';

export default function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this invoice?')) {
      await deleteInvoice(id);
    }
  };

  return (
    <form action={handleDelete}>
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}