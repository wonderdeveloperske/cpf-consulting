export default function Button({ label }: { label: string}) {
    return (
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700" >
            {label}
        </button>
    );
}
