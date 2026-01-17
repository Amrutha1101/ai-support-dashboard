export default function Topbar() {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-end px-6">
      <div className="flex items-center gap-4">

        {/* Notification bell (placeholder icon) */}
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>

        {/* User avatar */}
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
