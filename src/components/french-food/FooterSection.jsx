const FooterSection = () => {
  return (
    <footer className="bg-[#1C1C1C] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-['Playfair_Display'] text-3xl font-bold text-white mb-2">
          La Belle France
        </p>
        <p className="text-[#C9A84C] text-sm italic mb-6">
          "La cuisine, c'est quand les choses ont le goût de ce qu'elles sont."
        </p>
        <p className="text-white/40 text-xs">
          — Curnonsky, Prince of Gastronomes
        </p>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs">
            A celebration of French culinary heritage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
