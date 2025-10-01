export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0f172a]">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-10">
        <h1 className="text-2xl font-semibold tracking-tight">Salesman Management</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your sales team and register new salesmen</p>

        <div className="mt-4 flex gap-2">
          <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm hover:bg-slate-50">Salesman List</button>
          <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm hover:bg-slate-50">Register New Salesman</button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Table */}
        <section className="rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center justify-between px-5 py-4">
            <h2 className="text-sm font-medium text-slate-600">Salesman List</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Sort by</span>
              <button className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 shadow-sm hover:bg-slate-50">
                Name
                <svg className="ml-1 h-3 w-3 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"/></svg>
              </button>
            </div>
          </div>
          <div className="border-t border-slate-200"/>
          <div className="px-5">
            <div className="grid grid-cols-12 py-3 text-xs font-medium text-slate-500">
              <div className="col-span-4">Salesman</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-2">Phone</div>
              <div className="col-span-2">Territory</div>
              <div className="col-span-1 text-right">Status</div>
            </div>
            {[
              { name: 'John Davis', email:'john.davis@company.com', phone:'(555) 123-4567', terr:'North Region', status:'Active' },
              { name: 'Sarah Miller', email:'sarah.miller@company.com', phone:'(555) 234-5678', terr:'South Region', status:'Active' },
              { name: 'Michael Johnson', email:'michael.j@company.com', phone:'(555) 345-6789', terr:'East Region', status:'Active' },
              { name: 'Emily Wilson', email:'emily.wilson@company.com', phone:'(555) 456-7890', terr:'West Region', status:'On Leave' },
              { name: 'Robert Brown', email:'robert.brown@company.com', phone:'(555) 567-8901', terr:'Central Region', status:'Active' },
            ].map((r, idx) => (
              <div key={idx} className="grid grid-cols-12 items-center border-t border-slate-100 py-3 text-sm">
                <div className="col-span-4 flex items-center gap-3">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-slate-200"/>
                  <span className="text-slate-700">{r.name}</span>
                </div>
                <div className="col-span-3 text-slate-500">{r.email}</div>
                <div className="col-span-2 text-slate-500">{r.phone}</div>
                <div className="col-span-2 text-slate-500">{r.terr}</div>
                <div className="col-span-1 flex items-center justify-end gap-2">
                  <span className={"text-xs " + (r.status === 'Active' ? 'text-emerald-600' : 'text-amber-500')}>{r.status}</span>
                  <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="4" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="16" r="1.5"/></svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form + Tips */}
        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-medium text-slate-600">Register New Salesman</h3>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs text-slate-600">First Name</label>
                <input className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-slate-400" placeholder="John" />
                <p className="mt-1 text-[11px] text-slate-400">Enter the salesman's first name</p>
              </div>
              <div>
                <label className="text-xs text-slate-600">Last Name</label>
                <input className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400" placeholder="Davis" />
                <p className="mt-1 text-[11px] text-slate-400">Enter the salesman's last name</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-600">Email Address</label>
                <div className="mt-1 flex items-center rounded border border-slate-300 bg-white px-3 py-2 text-sm focus-within:border-slate-400">
                  <svg className="mr-2 h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/></svg>
                  <input className="w-full outline-none" placeholder="john.davis@company.com" />
                </div>
                <p className="mt-1 text-[11px] text-slate-400">Enter a valid email address</p>
              </div>
              <div>
                <label className="text-xs text-slate-600">Phone Number</label>
                <input className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400" placeholder="(555) 123-4567" />
                <p className="mt-1 text-[11px] text-slate-400">Enter contact phone number</p>
              </div>
              <div>
                <label className="text-xs text-slate-600">Territory Assignment</label>
                <div className="mt-1 flex items-center justify-between rounded border border-slate-300 bg-white px-3 py-2 text-sm focus-within:border-slate-400">
                  <span className="text-slate-400">Select territory</span>
                  <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"/></svg>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">Assign the salesman to a specific territory</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-600">Employee ID</label>
                <input className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400" placeholder="EMP-12345" />
                <p className="mt-1 text-[11px] text-slate-400">Unique identifier for the salesman</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-600">Additional Notes</label>
                <textarea rows={4} className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400" placeholder="Enter any relevant notes or comments..." />
                <p className="mt-1 text-[11px] text-slate-400">Any additional information about the salesman</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50">Cancel</button>
              <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-xs text-white hover:bg-slate-800">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809l-4.242 4.243a1 1 0 01-1.415 0L6.5 10.734a1 1 0 011.414-1.414l1.001 1.001 3.536-3.536a1 1 0 111.414 1.414z"/></svg>
                Register Salesman
              </button>
            </div>
          </div>

          {/* Tips */}
          <aside className="rounded-lg border border-slate-200 bg-white p-5">
            <h4 className="text-xs font-medium text-slate-600">Registration Tips</h4>
            <p className="mt-1 text-[11px] text-slate-400">Ensure all information is accurate before submitting</p>

            <ul className="mt-4 space-y-4">
              {[
                { title: 'Verify Contact Information', desc: 'Double-check email and phone number to ensure they are correct and active' },
                { title: 'Territory Assignment', desc: "Make sure the territory assignment matches the salesman's coverage area" },
                { title: 'Employee ID Format', desc: 'Follow the company standard format for employee IDs (EMP-XXXXX)' },
                { title: 'Complete All Required Fields', desc: 'All fields marked as required must be filled before submission' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-md bg-slate-50 p-3">
                  <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809l-4.242 4.243a1 1 0 01-1.415 0L6.5 10.734a1 1 0 011.414-1.414l1.001 1.001 3.536-3.536a1 1 0 111.414 1.414z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
