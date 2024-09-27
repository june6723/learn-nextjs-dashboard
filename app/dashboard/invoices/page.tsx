import { fetchLatestInvoices } from '@/app/lib/data';
import React from 'react';

export default async function page() {
  const latestInvoices = await fetchLatestInvoices();

  return <div>Invoices page</div>;
}
