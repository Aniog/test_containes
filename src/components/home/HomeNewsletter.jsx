import Button from '@/components/ui/Button';

const HomeNewsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-stone">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="bg-white p-12 md:p-20 text-center space-y-8 max-w-3xl w-full border border-velmora-black/5 shadow-sm">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Exclusive Access</span>
            <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
            <p className="text-muted-foreground tracking-wide font-light">
              Receive 10% off your first order and be the first to know about new collection drops and private sales.
            </p>
          </div>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto w-full pt-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-grow bg-velmora-stone border-none px-6 py-4 text-sm font-sans tracking-widest focus:ring-1 focus:ring-velmora-gold outline-none"
              required
            />
            <Button type="submit" className="md:w-auto w-full">Subscribe</Button>
          </form>
          
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-light">
            By signing up, you agree to receive email marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;